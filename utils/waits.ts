import { expect, type Locator } from '@playwright/test';

/**
 * Waits for observable UI state instead of using a fixed timeout.
 */
export async function expectStableText(locator: Locator, expected: string): Promise<void> {
  await expect(locator).toHaveText(expected);
  await expect.poll(async () => locator.textContent()).toBe(expected);
}
