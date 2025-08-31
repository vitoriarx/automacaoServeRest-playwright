import { test, expect } from '@playwright/test';

test.beforeEach(async ({page}) => {
    await page.goto('https://front.serverest.dev/cadastrarusuarios');

})
test('Acesse a página', async ({page}) => {
    await expect(page).toHaveURL(/cadastrarusuarios/);
});

test('Cadastrando usuario', async ({page}) => {
    const emailUnico = `qa.${Date.now()}@example.com`; 

    await page.getByTestId('nome').click();
    await page.getByTestId('nome').fill('UsuarioPlay1');

    await page.getByTestId('email').fill(emailUnico);
    await page.getByTestId('password').fill('Senha!forte123');

    const btn = page.getByRole('button', {name: 'cadastrar'});
    await btn.click();

    await expect(page).toHaveURL(/home/)
});