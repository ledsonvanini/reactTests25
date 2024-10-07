// alert(document.title)
//'https://gsi.fly.dev/characters'
const galeria = document.querySelector('#galeria')

async function genshinChars() {
   const req = await fetch(`https://gsi.fly.dev/characters`)
   const data = await req.json() 
   const res = data.results

   res.map(p => {
        console.log(p.name)
    return `
            <p>${p.name}</p>
    
    `    
})
        console.log(data.results)
}

async function teste() {
    //galeria.innerHTML  = await genshinChars()
}

teste()