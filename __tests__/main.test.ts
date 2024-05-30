/**
 * Unit tests for the action's main functionality, src/main.ts
 *
 * These should be run as if the action was called from a workflow.
 * Specifically, the inputs listed in `action.yml` should be set as environment
 * variables following the pattern `INPUT_<INPUT_NAME>`.
 */

import * as core from '@actions/core'
import { run } from '../src/main'

jest.mock("@actions/core");

describe('When running the action', () => {
  

  // We are just testing the output parameter has a correct value, and are verifying BEHAVIOR instead of specific details
  it('should set the release-url parameter', async () => {
    // Arrange
    // This const is meant to mock the output from main.ts->run(), which ideally is a core.setOutput() call.
    const fakeSetOutput = core.setOutput as jest.MockedFunction<typeof core.setOutput>;

    // Act
    await run();

    // Assert
    expect(fakeSetOutput).toHaveBeenCalledWith('release-url', expect.anything());
  });
});