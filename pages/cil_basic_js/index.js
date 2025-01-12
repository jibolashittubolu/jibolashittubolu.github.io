

const fetchListX = async () => {
    try{
    // const data = await fetch('https://jsonplaceholder.typicode.com/users')
    // const users = await data.json()
        console.log(users)
        for (let user of users){
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(user.name));                
 
        const list_api = document.querySelector('.list-api-display');

        list_api.appendChild(li)
        }
    }
    catch(err){
        console.log(err)
    }

}


const fetchList = async () => {


    // const spinner_improv = document.querySelector('.spinner-improv')
    // spinner_improv.style.display = 'block';

    try{
        error_improv.style.display = 'block'
        const table_api = document.querySelector('.table-api-display');
    // const data = await fetch('https://jsonplaceholder.typicode.com/users')
    // const users = await data.json()
    const table_body = document.querySelector('.tad-tbody')
        console.log(users)
        for (let user of users){
            table_body.innerHTML += "<tr class='tr-for-tbody'></tr>"
            //array loop
            // const table_body = table_api.getElementsByTagName('tbody')[0] 
            // += '<tr></tr>'

            // table_body = table_body.getElementsByTagName('tr')

            for ( let [key, value] of Object.entries(user)){
                //go through each item and attach their key to the header

                // const th = document.createElement('th');
                // th.appendChild(document.createTextNode(k));  

                
                const table_head = table_api.getElementsByTagName('thead')[0].getElementsByTagName('tr')[0]
                if(!table_head.innerHTML.includes(key)){
                    table_head.innerHTML += `<th>${key}</th>`
                }
                // console.log(k,v)

                // const tr_for_tbody = document.querySelector('.tr-for-tbody')
                // tr_for_tbody.innerHTML += `<td><span>${value}<span></td>`

                // const table_body = table_api.getElementsByTagName('tbody')[0]

                // if(!table_body.innerHTML.includes(v)){
                    // table_body.innerHTML += `<td><span>${v}<span></td>`
                // }
            }
            // console.log(table_api.getElementsByTagName('tbody')[0])


    
     



            // list_api.appendChild(li)


            
            // .getElementsByClassName('tr')
        }
        console.log(table_body)
    }
    catch(err){
        console.log(err)
        // error_improv.style.display = 'block';
    }

}
// fetchList();

const generateTable = async () => {
    const error_improv = document.querySelector('.error-improv')
    error_improv.style.display = 'none'
    try {     
        //Build an array containing Customer records.
        // var customers = new Array();
        // customers.push(["Customer Id", "Name", "Country"]);
        // customers.push([1, "John Hammond", "United States"]);
        // customers.push([2, "Mudassar Khan", "India"]);
        // customers.push([3, "Suzanne Mathews", "France"]);
        // customers.push([4, "Robert Schidner", "Russia"]);

        const data = await fetch('https://jsonplaceholder.typicode.com/users')
        const users = await data.json()
        //fetch the data 


        // the below block helps to sort out the api data we need to conform it as a list of lists
        let all = []
        //all stores the list of lists
        let titles = []
        //holds the headers
        for(let user of users){
            var partitions = []
            for (let [k, v] of Object.entries(user)){
                titles.push(k)
                //push the keys, i.e header
                //then for the value
                if (
                    typeof(v) === 'object' &&
                    v !== null &&
                    !Array.isArray(v)
                ){
                    v = Object.values(v)[0]
                    // console.log(v)
                    //take the first object property
                    partitions.push(v);
                    continue;
                }
                //if ensures that the propery itself is not a nested objec
                partitions.push(v)
            }
            all.push(partitions)
        }
        let table_headers = [...new Set(titles)]
        //remove duplicate headings or not
        table_headers = table_headers.map( header => header.toUpperCase())
        //capitalize the headers
        // console.log(table_headers)
        all.unshift( table_headers )

        customers = [...all]
        console.log(all)




        //Create a HTML Table element.
        var table = document.createElement("TABLE");
        table.border = "1";
        // table.style.tableLayout = 'fixed'
        // table.style.display = 'none'
        // table.style.overflow = 'scroll'
        // table.style.overflowX = 'scroll'

        //Get the count of columns.
        var columnCount = customers[0].length;

        //Add the header row.
        var row = table.insertRow(-1);
        for (var i = 0; i < columnCount; i++) {
            var headerCell = document.createElement("TH");
            headerCell.innerHTML = customers[0][i];
            row.appendChild(headerCell);
        }

        //Add the data rows.
        for (var i = 1; i < customers.length; i++) {
            row = table.insertRow(-1);
            for (var j = 0; j < columnCount; j++) {
                var cell = row.insertCell(-1);
                cell.innerHTML = customers[i][j];
            }
        }

        var dvTable = document.getElementById("dvTable");
        dvTable.innerHTML = "";
        dvTable.appendChild(table);
    } 
    catch (error) {
        error_improv.style.display = 'block'
        console.log(error)
    }
}
generateTable()

const themeTogglex = () => {
    //goes through all the listed tags and appends the 'light-mode' class to it
    //the problem with this is that tags with styles that are id specific cannot be overwritten due to id specificity > class specifity

    //the reason we have opted for using a global style store as :root and modifying accordingly in the toggle adopted currently
    let selectors = ['body', 'div', 'span', 'section', 'li', 'ul', 'ol', 'h1', 'h2','h3', 'h4', 'h5','h6', 'p',  'a', 'button']
    for (let selector of selectors){       
        let elem = document.getElementsByTagName(selector)
        for (let item of elem){
            item.classList.toggle('light-mode')
        }
    }
};

var counterX = 2;
const themeToggle = () => {
    // const root = document.querySelector(':root');
    // // set css variable
    // // to get css variable from :root
    // const color = getComputedStyle(root).getPropertyValue('--my-color'); // blue
    const root = document.querySelector(':root');
    const setVariables = (vars) => {
        Object.entries(vars).forEach(v => root.style.setProperty(v[0], v[1]))
    }
    const myVariables = counterX % 2 === 0 ?
    {
    '--mainTextColor-light': '#fff',
    '--secondaryTextColor-light': '#adb0b1',
    '--mainLinkColor-light': '#1ebed6',
    '--mainBorderColor-light': '#dadada',
    '--mainBgColor-light': '#131415',
    '--mainTextColor-dark': '#000',
    '--secondaryTextColor-dark': '#333333',
    '--mainLinkColor-dark': '#0da2b8',
    '--mainBorderColor-dark': '#2b3031',
    '--mainBgColor-dark': '#f9fafb',
    }:
    {
    '--mainTextColor-light': '#000',
    '--secondaryTextColor-light': '#333333',
    '--mainLinkColor-light': '#0da2b8',
    '--mainBorderColor-light': '#2b3031',
    '--mainBgColor-light': '#f9fafb',
    '--mainTextColor-dark': '#fff',
    '--secondaryTextColor-dark': '#adb0b1',
    '--mainLinkColor-dark': '#1ebed6',
    '--mainBorderColor-dark': '#dadada',
    '--mainBgColor-dark': '#131415',
    }
    setVariables(myVariables);
    counterX++
    // console.log(counterX)
    // console.log(myVariables)

    let toggleSwitch = document.querySelector('.t-button')
    toggleSwitch.classList.toggle('move')
}

const btn = document.querySelector('.theme-changer');
btn.addEventListener('click', (e)=> {
    e.preventDefault()
    themeToggle()
})

const reloadAPIQuery = () => {
    // alert('hiya')
    let debouncer = false
    const generated_table = document.querySelector('#dvTable');
    generated_table.innerHTML = ''
    //removes all the children
    const reload_button = document.querySelector('.reload-button')
    reload_button.disabled = true;

    const spinner_improv = document.querySelector('.spinner-improv')
    spinner_improv.style.display = 'block';
    const error_improv = document.querySelector('.error-improv')
    error_improv.style.display = 'none'
    const bogusFunction = () => {
        generateTable()
        reload_button.disabled=false;
        spinner_improv.style.display = 'none';
    }
    setTimeout(bogusFunction, 2000)
    // fetchList()
}
const reload_button = document.querySelector('.reload-button')
reload_button.addEventListener('click', (e)=> {
    e.preventDefault()
    reloadAPIQuery()
})

