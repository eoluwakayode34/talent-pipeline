
     var count = 1;
     var prev = document.getElementById('prevBtn');
     var next = document.getElementById('nextBtn');
     var pageCount= document.getElementById('pageView');

    function loadData(page){
        // pageCount.textContent = page;
        fetch(`https://randomapi.com/api/8csrgnjw?key=LEIX-GF3O-AG7I-6J84&page=${page}`).then((res) => {return res.json()}).then(res => {
         let tableData = res?.results[0][`${page}`];
         var userTable = document.getElementById('tableBody');
         userTable.innerHTML = '';
        const tableFrag = document.createDocumentFragment();

         for (let i = 0; i < tableData.length; i++) {
            var tr = document.createElement('tr');
            var row = document.createElement('td');
            var age = document.createElement('td');
            var gender = document.createElement('td');

                row.textContent = tableData[i].row;
                age.textContent = tableData[i].age;
                gender.textContent = tableData[i].gender;

                tr.style.textTransform = 'uppercase'

            tr.append(row, gender, age);
            tableFrag.append(tr);

         }

         userTable?.append(tableFrag);

          
        })

        pageCount.textContent = `Showing Page ${page}`;



        prev.disabled = false;

    }


    loadData(count);


    prev?.addEventListener('click', function(){

        if(count <= 1){
            prev.disabled = true;
        }else{

            count--;
            loadData(count);
        }
     });

     next?.addEventListener('click', function(){
        count++;
        loadData(count);
     });



