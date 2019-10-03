const InfraClass = require('./seleniumInfra')

class TodosPage {
    constructor() {
        this.seleniumInfra = new InfraClass()
        this.driver = this.seleniumInfra.driver
    }

    async insertAndDelete(todoText) 
    {
        //The function recived text ,then click the button and print if the input is equal to the result and check if after clicking the delete button the new element that has been created has deleted.
        
        await this.seleniumInfra.write(todoText, 'id', 'todo-input')
        await this.seleniumInfra.clickElement('id', 'addToDo')

        try {
            let new_div=await this.seleniumInfra.findElementBy('xpath','/html/body/div[2]/div')
            if(!new_div)
            {
                throw `by the current locators`
            }
            let new_div_text = await this.seleniumInfra.getTextFromElement(null,null,new_div)
            if (new_div_text == todoText)
            {
                console.log("New div has the same text")
            }
            else
            {
                console.log("Error: New div does not has the same text")
            }
        }
        catch (error)
        {
            console.log("Error: Can’t find a new div " + error)
        }
       await this.seleniumInfra.clickElement('xpath','/html/body/div[2]/div/span[2]/i')
       let flag= await this.seleniumInfra.isElementExists('xpath','/html/body/div[2]/div') 
       //just because I use that method one time otherwise I would compare the text of the element to the text I recived(The path is change when there is more then one div)

        console.log(flag? "The div was not deleted" : "The div was deleted")
     
    }

        async insertAndComplete(todoText)
        {
            //the function get string insert it and check the buttons of add and check and their results.
            await this.seleniumInfra.write(todoText, 'id', 'todo-input')
        await this.seleniumInfra.clickElement('id', 'addToDo')

        try {
            let new_div=await this.seleniumInfra.findElementBy('xpath','/html/body/div[2]/div')
            if(!new_div)
            {
                throw `by the current locators`
            }
            console.log("found a new div")
            // let new_div_text = await this.seleniumInfra.getTextFromElement(null,null,new_div)
            // console.log(new_div_text)
            await this.seleniumInfra.clickElement('xpath','/html/body/div[2]/div/i')
            let new_div_text = await this.seleniumInfra.getTextFromElement(null,null,new_div)
            
            if(!new_div_text) //when we check the text and try to get text from the element he become empty (The infra return "" because of the error of getting the 'checked' text from the element ) 
            {
                console.log("The new div was checked")

            }
            else
            {
                console.log("Error-the new div was not checked")
            }
        }
        catch (error)
        {
            console.log("Error: Can’t find a new div " + error)
        }
        
            
        }

        async insertTwoDeleteFirst(todoText1,todoText2)
        {
            //The function get two strings ,insert them and click add then delete the first div and check if the specific div has delete 
           await  this.seleniumInfra.write(todoText1,'id', 'todo-input')
            await this.seleniumInfra.clickElement('id', 'addToDo')
            try {
                let div1=await this.seleniumInfra.findElementBy('xpath','/html/body/div[2]/div')
                if(!div1)
                {
                    throw `by the current locators`
                }
                    console.log("found a new div") 

            }
            catch (error)
            {
                console.log("Error: Can’t find a new div " + error)
            }
            // click the second element 
            this.seleniumInfra.write(todoText2,'id', 'todo-input')
            await this.seleniumInfra.clickElement('id', 'addToDo')
            try {
                let div2=await this.seleniumInfra.findElementBy('xpath','/html/body/div[2]/div[2]')
                if(!div2)
                {
                    throw `by the current locators`
                }
                    console.log("found a new div") 
                await this.seleniumInfra.clickElement('xpath','/html/body/div[2]/div[1]/span[2]/i')
                let text1=await this.seleniumInfra.getTextFromElement('xpath','/html/body/div[2]/div')
                if(text1 !== todoText1)
                {
                    console.log("the first div was deleted")
                   
                }
                else
                {
                    console.log("the first div was not deleted")
                }

            }
            catch (error)
            {
                console.log("Error: Can’t find a new div " + error)
            }

            

        }
       
     
        async get_url(url)
        {
           await this.seleniumInfra.getURL(url)
        }
        
    }
module.exports=TodosPage