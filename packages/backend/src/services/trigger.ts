import { IJSONObject, ITriggerDataItem } from '@automatisch/types';
import Step from '../models/step';
import Flow from '../models/flow';
import Execution from '../models/execution';
import globalVariable from '../helpers/global-variable';

type ProcessTriggerOptions = {
  flowId: string;
  stepId: string;
  triggerDataItem?: ITriggerDataItem;
  error?: IJSONObject;
  testRun?: boolean;
};

export const processTrigger = async (options: ProcessTriggerOptions) => {
  const { flowId, stepId, triggerDataItem, error, testRun } = options;

  const step = await Step.query().findById(stepId).throwIfNotFound();

  const $ = await globalVariable({
    flow: await Flow.query().findById(flowId).throwIfNotFound(),
    app: await step.getApp(),
    step: step,
    connection: await step.$relatedQuery('connection'),
  });

  // check if we already process this trigger data item or not!

  const execution = await Execution.query().insert({
    flowId: $.flow.id,
    testRun,
    internalId: triggerDataItem?.meta.internalId,
  });

  const executionStep = await execution
    .$relatedQuery('executionSteps')
    .insertAndFetch({
      stepId: $.step.id,
      status: error ? 'failure' : 'success',
      dataIn: $.step.parameters,
      dataOut: !error ? triggerDataItem.raw : null,
      errorDetails: error,
    });

  return { flowId, stepId, executionId: execution.id, executionStep };
};
