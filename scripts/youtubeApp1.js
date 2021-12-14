

  let datastorage=JSON.parse(localStorage.getItem("username"));

    if(datastorage) {
      let divone=document.getElementById("change-div");

      divone.innerHTML=null;
      let p=document.createElement("p");
      p.innerText=datastorage.username;
      p.style.marginTop="10px";
      divone.appendChild(p);

    }

    let searchResults=document.getElementById("search_results");
    async function searchList() {
        let name=document.getElementById("search_bar").value;
        let res=await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=${name}&type=video&key=AIzaSyCFylZe4T-XCAmRhIcjkPAGEmAaG6qHmjI`);
        let data=await res.json();
        console.log('data:', data);
        appendSearchResults(data.items)
    };

    
    


    function appendSearchResults(list) {
      
        let parent=document.getElementById("search_results");
        parent.innerHTML=null;
        list.forEach(({snippet:{title}}) => {
            console.log('items:', title);
            
            let div=document.createElement("div");
            div.onclick=function(){
              searchResults.style.visibility="hidden"
              searchVideos(title);
            }
            let p=document.createElement("p");
            p.innerText=title;

            div.append(p);
            parent.append(div);





        });
    }
    let timerId;

    function debounce(func,delay) {
        let name=document.getElementById("search_bar").value;
        
        searchResults.style.visibility="visible";

        if(name.length==0) {
            searchResults.style.visibility="hidden";
            searchResults.innerHTML=null;
        }

       

        if(timerId) {
            clearTimeout(timerId);
        }


       timerId= setTimeout(function() {
            func();
        },delay)

    }

    
    let videos=document.getElementById("videos");
    async function searchVideos(query) {
        let res = await fetch(`https://youtube.googleapis.com/youtube/v3/search?q=${query}&type=video&key=AIzaSyCFylZe4T-XCAmRhIcjkPAGEmAaG6qHmjI&maxResults=20`)
        let data= await res.json();
        console.log('data:', data);
        appendVideos(data.items)

    }   

 

    function appendVideos(video_data) {

        videos.innerHTML=null;
        video_data.forEach(({id:{videoId}})=> {
        console.log('video:',videoId);


            let div= document.createElement('div');
            div.style.marginTop="20px";

            div.innerHTML =`<iframe width="210" height="140" src="https://www.youtube.com/embed/${videoId}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`


            videos.append(div);

        });
    }



    async function searchVideos1() {
        let res = await fetch(`https://youtube.googleapis.com/youtube/v3/videos?chart=mostPopular&maxResults=20&key=AIzaSyCFylZe4T-XCAmRhIcjkPAGEmAaG6qHmjI`)
        let data= await res.json();
        console.log('data:', data);
        appendVideos1(data.items)

    }   

 

    function appendVideos1(video_data) {

        videos.innerHTML=null;
        video_data.forEach(({id})=> {
        console.log('video:',id);


            let div= document.createElement('div');
            div.style.marginTop="20px";

            div.innerHTML =`<iframe width="210" height="140" src="https://www.youtube.com/embed/${id}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`


            videos.append(div);

        });
    }

    searchVideos1()


