import { test, expect } from '../../fixtures/test-fixtures';

test('@regression tasks persist after page reload', async ({ page, todoPage }) => {
  await todoPage.addTodo('Persistent task');

  await page.reload();

  await expect(todoPage.item('Persistent task')).toBeVisible();
  await expect(todoPage.todoCount).toContainText('1 item left');
});
