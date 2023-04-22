function getSummary(){
    generateSummaryTemplate();

}


function generateSummaryTemplate(){
    let content = document.getElementById('summaryContent');

    content.innerHTML = /*html*/`
        <div class="task-container">
            <div class="task-container-2">
            <div class="task-progress"><span class="task-number-container"> <p>5</p></span> <span class="task-text-container"> Task in Board</span></div>
            <div class="task-progress"><span class="task-number-container"> <p>2</p></span> <span class="task-text-container"> Tasks in Progress</span></div>
            <div class="task-progress"><span class="task-number-container"> <p>2</p></span> <span class="task-text-container"> Awaiting Feedback</span></div>
            
            
            </div>
            

        <div class="task-Deadline-Container">
                <div class="task-Deadline-Info">
                <img src="./src/img/redCircle.png" alt="redCirlce">
               <div class="deadline-text"><p>1</p> Urgent</div>

                </div>
                
                <div class="gray-line"></div>
                <div> 
                    <span class="date"> April 16, 2023</span> <p> Upcoming Deadline</p>
               </div>
               
                 
        </div>      
        
        <div class="times-Container">
    <div class="times">
    Good Morning, <p>Sofia Müller</p>
    </div>   
    </div>


</div> 

        
    `;}