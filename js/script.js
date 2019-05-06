
const studentList = document.getElementsByClassName('student-item');

const page = document.getElementsByClassName('page')
const maxItems = 10
const maxPages = Math.ceil(studentList.length / maxItems);
const aTag = document.getElementsByTagName('a');
//search / filter variables
const filterDiv = document.createElement('div');
const input = document.createElement('input');
const button = document.createElement('button');
const newInputDiv = document.querySelectorAll('.page-header')

// search/filter   <--- code from w3 school and simple search warmup--->
const searchFunction = () => {
   newInputDiv.appendChild(filterDiv);
   filterDiv.classList.add ='search';
   filterDiv.appendChild(input)
   input.type = 'text';
   input.placeholder = 'Search'
   filterDiv.appendChild(button)
   button.type = 'submit';
   
   
};


///hello

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

appendPageLinks();
showPage(studentList,1); //we want the first page to show

