const btn_close_tdb = document.querySelector('.btn_close_panel')
const tdb_container = document.querySelector('.tdb_panel_container')

btn_close_tdb.addEventListener('click',() =>{
    
    tdb_container.classList.toggle('d_n')

    if(tdb_container.classList.contains('d_n'))
    {   
        
        var para = document.createElement("P");
        para.classList.add('btn_open_panel')              
        para.innerHTML = "This is a paragraph.";                
        document.getElementById("my_container").appendChild(para);
        
        const btn_open_panel = document.querySelector('.btn_open_panel')

        btn_open_panel.addEventListener('click',()=>{
            tdb_container.classList.toggle('d_n');
            btn_open_panel.classList.toggle('d_n')
            
        })
    }
})  

