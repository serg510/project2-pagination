
const studentList = document.getElementsByClassName('student-item');

const page = document.getElementsByClassName('page')
const maxItems = 10
const maxPages = Math.ceil(studentList.length / maxItems);
const aTag = document.getElementsByTagName('a');






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
        
       }
         
     );	
  }   
 } 
}

appendPageLinks();
showPage(studentList,1); //we want the first page to show