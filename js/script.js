
const studentList = document.getElementsByClassName('student-item');

const page = document.getElementsByClassName('page')
const maxItems = 10
const maxPages = Math.ceil(studentList.length / maxItems);
const aTag = document.getElementsByTagName('a');
//search variables
const filterDiv = document.createElement('div');
const input = document.createElement('input');

const button = document.createElement('button');
const newInputDiv = document.querySelectorAll('.page-header')[0]
//filter variables
const ul = document.querySelector('ul');
ul.setAttribute('id','names');
const noName = document.createElement('div');
noName.textContent = "No Matches Found"
newInputDiv.appendChild(noName);
noName.style.display = 'none';

// search/filter   <--- code from w3 school and simple search warmup--->
// function to search for a specific person
searchFunction = () => {
   newInputDiv.appendChild(filterDiv);
   newInputDiv.classList.add('pagination')
   filterDiv.classList.add('search');
   filterDiv.appendChild(input)
   input.setAttribute('id','search-input')
   input.type = 'text';
   input.placeholder = 'Search For Students'
   filterDiv.appendChild(button)
   button.type = 'submit';
   button.textContent = 'SEARCH';
   button.setAttribute('id','search-button')
   
   
};

searchFunction();

let filterInput = document.getElementById('search-input');





//help from traversy media https://youtu.be/G1eW3Oi6uoc

function filterNames(){
   document.getElementsByClassName("pagination")[0].innerHTML = ' ';
   filterValue = filterInput.value.toUpperCase();

   //get student list ul 
   let ul = document.getElementById('names');

   //get li from ul
   let li = ul.querySelectorAll('li.student-item');

   const searchResults = [];

   //loop through student-item
   for(let i =0; i < li.length; i++){
      let h3 = li[i].getElementsByTagName('h3')[0];
      
      // if matched
      if( h3.innerHTML.toUpperCase().includes(filterValue)){
         searchResults.push(li[i]);
         li[i].style.display = '';
      } else {
         noName.style.display = 'none'                                    
      }
}                                                    
      showPage(searchResults,1);                                                   
}
//add Event Listeners///
input.addEventListener('keyup', filterNames);                                 
button.addEventListener('click', filterNames);   

const showPage = (studentList,page)=>{
   const lastItem = ((page * 10)-1);
   const firstItem = (lastItem - 9);
   for (let i = 0; i < studentList.length; i++){
      if( i >= firstItem && i <=lastItem ){
         studentList[i].style.display = 'block';
      }else {
         studentList[i].style.display = 'none';

      }

   }

}

 

const appendPageLinks = () => {
    //create div class="pagination"
   const newDiv = document.createElement('div');
   newDiv.className = 'pagination';
   //append div to .page div
   const page = document.getElementsByClassName('page')[0];
   page.appendChild(newDiv);
   //add ul to .pagination
   const ul = document.createElement('ul');
   newDiv.appendChild(ul);
   //for every page, add li and a tags with page number text
   for (let i = 1 ; i <= maxPages; i++){
     //create li and a
    const li = document.createElement('li');
    const a = document.createElement('a');
       //add page number to a
       a.textContent = i;
       //append a to li
       li.appendChild(a);
       //append li to ul
       ul.appendChild(li);
       aTag[0].classList.add('active');
      //add event listener to each a
       
       for(let i =0; i < aTag.length; i++ ){
         aTag[i].addEventListener('click', e => {
         const pageNumber = Number(e.target.textContent);

         //e is the click event
         //e.target is the a clicked on
         //e.target.textContent is the page number of the a
         //Number() changes the string to a number
         showPage(studentList,pageNumber);  
         //sending a number to the showPage() function
         for (let i = 0; i < aTag.length ; i++) {                      
               
            aTag[i].classList.remove("active");                       
         }
            e.target.classList.add("active");    
       }
         
     );	
  }   
 } 
}


showPage(studentList,1); //we want the first page to show
appendPageLinks(studentList);

