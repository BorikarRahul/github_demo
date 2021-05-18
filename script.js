var form = document.getElementById("myForm")


form.addEventListener('submit',function(e){
    e.preventDefault()

    var search = document.getElementById("search").value

    var originalName = search.split(' ').join('')

    // alert(originalName)

    document.getElementById("result").innerHTML = " "
    
    fetch("https://api.github.com/users/"+search )

    .then((result) => result.json())
    .then((data) => {
        console.log(data)

        document.getElementById("result").innerHTML = `
            <a target="blank" href="https://www.github.com/${originalName}"> <img src="${data.avatar_url}"/></a>
        `        
    } )
})

var form = document.getElementById("myForm1")


form.addEventListener('submit',function(f){
    f.preventDefault()

    var search1 = document.getElementById("search1").value

    var OName = search1.split(' ').join('')

    // alert(originalName)

    document.getElementById("repository").innerHTML = " "
    
    fetch("https://api.github.com/users/"+search1+"?tab=repositories")
    // ?tab=repositories

    .then((repository) => repository.json())
    .then((data) => {
        console.log(data)

        document.getElementById("repository").innerHTML = `
            <a target="blank" href="https://www.github.com/${OName}?tab=repositories"> <img src="${data.avatar_url}"/></a>
        `        
    } )
})

var form = document.getElementById("myForm2")


form.addEventListener('submit',function(g){
    g.preventDefault()

    var search2 = document.getElementById("search2").value
    var search3 = document.getElementById("search3").value

    var OnName = search2.split(' ').join('')
    var OnName1 = search3.split(' ').join('')

    // alert(originalName)

    document.getElementById("folder").innerHTML = " "
    
    fetch("https://api.github.com/users/"+search2+"?tab=repositories")
    fetch("https://api.github.com/users/"+search2+"/"+search3+"")


    .then((folder) => folder.json())
    .then((data) => {
        console.log(data)

        document.getElementById("folder").innerHTML = `
            <a target="blank" href="https://www.github.com/${OnName}/${OnName1}"> <img src="http://icons.iconarchive.com/icons/media-design/hydropro-v2/256/Folder-icon.png"/></a>
        `        
    } )
})