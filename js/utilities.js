// console.log("connected")


function InputValueById(id){
    let inputValue= document.getElementById(id).value;
    let inputNumber= parseFloat(inputValue)
    return inputNumber;

}

function getTextFieldValueById(id){
    const textValue= document.getElementById(id).innerText
    const textNumber = parseFloat(textValue);
    return textNumber;
}


function switchTab(activeTab,inactiveTab,showSectionId,hideSectionId){
    activeTab.classList.add('btn-ghost','bg-btn-color')
    activeTab.classList.remove('btn-outline')

    inactiveTab.classList.remove('btn-ghost','bg-btn-color');
    inactiveTab.classList.add('btn-outline')


    document.getElementById(showSectionId).classList.add('hidden')
    document.getElementById(hideSectionId).classList.remove('hidden')

}

function getInnerText(elementId){
    const element=document.getElementById(elementId)
    if(!element){
        console.error(`Element with Id "${elementId}" not found`);
        return null;
   
    }
    return element.innerText;    
}

function history(amount,title){
 const historyContainer= document.getElementById("history-container")   

 const historyItem= document.createElement("div");
 historyItem.classList.add(
    "border-2",
    "border-gray-200",
    "rounded-lg",
    "my-4",
    "space-y-2",
    "p-4"

)

historyItem.innerHTML=`
<p class="text-2xl font-black">
${amount} Taka is Donated for ${title}
</p>
<p class="text-gray-400"> Date:  ${new Date().toString()}}</p>
`
historyContainer.insertBefore(historyItem,historyContainer.children[0])

}