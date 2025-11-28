import { test, expect } from "@storybook/test-runner";

test("Component: Default visually correct", async ({ story, page }) => {
  await story.render();

  // Compare screenshot to baseline snapshot
  const image = await page.screenshot();
  expect(image).toMatchSnapshot();
});