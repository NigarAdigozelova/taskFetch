let tbody=document.querySelector("#tbody")
let count=1;
console.log(tbody);
fetch('https://northwind.vercel.app/api/products')
  .then((response) => response.json())
  .then((data) => {
    data.forEach(data => {
        tbody.innerHTML += `<tr>
          <th >${count}</th>
          <td>${data.name}</td>
          <td>${data.unitPrice}$</td>
          <td style="color: ${data.category?.name==undefined ?"red" :  "black"}">${(data.category?.name==undefined) ?"category not found": data.category.name}</td>
          <td>${(data.discontinued==true)?"yes":"not"}</td>
         
        </tr>`;
        count++;
    
    })

 
  });
  




 
