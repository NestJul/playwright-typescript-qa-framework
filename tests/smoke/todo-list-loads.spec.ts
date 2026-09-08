import { test, expect } from '../../fixtures/test-fixtures';

test('@smoke TodoMVC opens and accepts a new task', async ({ todoPage }) => {
  await todoPage.addTodo('Review the test report');

  await expect(todoPage.item('Review the test report')).toBeVisible();
  await expect(todoPage.todoCount).toContainText('1 item left');
});
