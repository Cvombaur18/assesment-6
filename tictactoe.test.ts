import { Builder, Capabilities, By } from "selenium-webdriver"

const chromedriver = require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeAll(async () => {
    await driver.get('http://localhost:4000')
})

afterAll(async () => {
    await driver.quit()
})

test('I can start a game', async () => {

    let button = await (await driver).findElement(By.id('start-game'));
    await button.click();

    await driver.sleep(2000)


    let click0 = await driver.findElement(By.id('cell-0'))
       await click0.click();

        await driver.sleep(3000)

    let click4 = await driver.findElement(By.id('cell-4'))
        await click4.click();
 
         await driver.sleep(3000)

    let click8 = await driver.findElement(By.id('cell-8'))
         await click8.click();
  
          await driver.sleep(3000)
                
            })

