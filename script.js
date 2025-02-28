document.getElementById("discover-something").addEventListener("click",function(){
    window.location.href = "./blog.html"
})



document.getElementById("change-bg-color").addEventListener("click",function(){
    console.log("nice")
    document.body.style.backgroundColor = generateRandomColor();
});

function generateRandomColor(){
    let randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    return randomColor;
}



function dateAndDays(){
    let now = new Date();

    let options = { weekday: "long", year:"numeric", month:"long", day: "numeric"};
    let formattedDate = now.toLocaleDateString("en-US", options);

    document.getElementById("date-section").innerText = formattedDate;

}
let result = dateAndDays()
console.log(result)

document.getElementById("mobile-btn").addEventListener("click",function(event){
    event.preventDefault();
    alert("Board Updated Successfully...")
  

    const totalTask = document.getElementById("total-task").innerText;
    const convertedTotalTask = parseInt(totalTask);
    const totalNumber = document.getElementById("total-number").innerText;
    const convertedTotalNumber = parseInt(totalNumber);

    const diff = convertedTotalTask - 1;
    document.getElementById("total-task").innerText = diff;
    const sum = convertedTotalNumber + 1;
    document.getElementById("total-number").innerText = sum;


    this.disabled = true;
    this.innerText = "Completed";
    this.style.opacity ="0.5";


    let now = new Date();
    let formattedDate = now.toLocaleTimeString();

    let newText = document.createElement("p");
    newText.innerText = `You have completed the task Fix Mobile Button Issue at ${formattedDate}`;
    document.getElementById("activity-container").appendChild(newText);
})


document.getElementById("dark-mode-btn").addEventListener("click",function(event){
    event.preventDefault();
    alert("Board Updated Successfully...")
  

    const totalTask = document.getElementById("total-task").innerText;
    const convertedTotalTask = parseInt(totalTask);
    const totalNumber = document.getElementById("total-number").innerText;
    const convertedTotalNumber = parseInt(totalNumber);

    const diff = convertedTotalTask - 1;
    document.getElementById("total-task").innerText = diff;
    const sum = convertedTotalNumber + 1;
    document.getElementById("total-number").innerText = sum;


    this.disabled = true;
    this.innerText = "Completed";
    this.style.opacity ="0.5";


    let now = new Date();
    let formattedDate = now.toLocaleTimeString();

    let newText = document.createElement("p");
    newText.innerText = `You have completed the task Add Dark Mode at ${formattedDate}`;
    document.getElementById("activity-container").appendChild(newText);
})




document.getElementById("home-page-btn").addEventListener("click",function(event){
    event.preventDefault();
    alert("Board Updated Successfully...")
  

    const totalTask = document.getElementById("total-task").innerText;
    const convertedTotalTask = parseInt(totalTask);
    const totalNumber = document.getElementById("total-number").innerText;
    const convertedTotalNumber = parseInt(totalNumber);

    const diff = convertedTotalTask - 1;
    document.getElementById("total-task").innerText = diff;
    const sum = convertedTotalNumber + 1;
    document.getElementById("total-number").innerText = sum;


    this.disabled = true;
    this.innerText = "Completed";
    this.style.opacity ="0.5";


    let now = new Date();
    let formattedDate = now.toLocaleTimeString();

    let newText = document.createElement("p");
    newText.innerText = `You have completed the task Optimize Home page at ${formattedDate}`;
    document.getElementById("activity-container").appendChild(newText);
})



document.getElementById("new-emoji-btn").addEventListener("click",function(event){
    event.preventDefault();
    alert("Board Updated Successfully...")
  

    const totalTask = document.getElementById("total-task").innerText;
    const convertedTotalTask = parseInt(totalTask);
    const totalNumber = document.getElementById("total-number").innerText;
    const convertedTotalNumber = parseInt(totalNumber);

    const diff = convertedTotalTask - 1;
    document.getElementById("total-task").innerText = diff;
    const sum = convertedTotalNumber + 1;
    document.getElementById("total-number").innerText = sum;


    this.disabled = true;
    this.innerText = "Completed";
    this.style.opacity ="0.5";


    let now = new Date();
    let formattedDate = now.toLocaleTimeString();

    let newText = document.createElement("p");
    newText.innerText = `You have completed the task Add new emoji 🤲
     at ${formattedDate}`;
    document.getElementById("activity-container").appendChild(newText);
})


document.getElementById("openai-api-btn").addEventListener("click",function(event){
    event.preventDefault();
    alert("Board Updated Successfully...")
  

    const totalTask = document.getElementById("total-task").innerText;
    const convertedTotalTask = parseInt(totalTask);
    const totalNumber = document.getElementById("total-number").innerText;
    const convertedTotalNumber = parseInt(totalNumber);

    const diff = convertedTotalTask - 1;
    document.getElementById("total-task").innerText = diff;
    const sum = convertedTotalNumber + 1;
    document.getElementById("total-number").innerText = sum;


    this.disabled = true;
    this.innerText = "Completed";
    this.style.opacity ="0.5";


    let now = new Date();
    let formattedDate = now.toLocaleTimeString();

    let newText = document.createElement("p");
    newText.innerText = `You have completed the task Integrate OpenAI API at ${formattedDate}`;
    document.getElementById("activity-container").appendChild(newText);
})



document.getElementById("job-searching-btn").addEventListener("click",function(event){
    event.preventDefault();
    alert("Board Updated Successfully...")
    alert("congrats!!! You have completed all the current task");
  

    const totalTask = document.getElementById("total-task").innerText;
    const convertedTotalTask = parseInt(totalTask);
    const totalNumber = document.getElementById("total-number").innerText;
    const convertedTotalNumber = parseInt(totalNumber);

    const diff = convertedTotalTask - 1;
    document.getElementById("total-task").innerText = diff;
    const sum = convertedTotalNumber + 1;
    document.getElementById("total-number").innerText = sum;


    this.disabled = true;
    this.innerText = "Completed";
    this.style.opacity ="0.5";


    let now = new Date();
    let formattedDate = now.toLocaleTimeString();

    let newText = document.createElement("p");
    newText.innerText = `You have completed the task Improve Job searching at ${formattedDate}`;
    document.getElementById("activity-container").appendChild(newText);
})



document.getElementById("clear-history").addEventListener("click",function(){
    document.getElementById("activity-container").innerText = "";

})