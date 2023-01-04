var url_data = `https://randomfox.ca/images/82.jpg `

async function res_fetching(){
    var url_fetch =await fetch(url_data);
    var res = url_fetch;
    console.log(res);
    console.log('This is the url',res['url']);
        var child_ele = document.createElement('img');
        child_ele.setAttribute('src',res['url'])
        document.querySelector('body').append(child_ele);
    //for (let k of res) {
     //   console.log(k.url)
    //}
}
res_fetching()