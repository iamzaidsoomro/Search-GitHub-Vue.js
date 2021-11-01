const script = Vue.createApp({
    data(){
        return{
            message: "",
            name:"",
            bio:"",
            username:"",
            pic:"",
            twitter:"",
            twitter_username:"",
            blog:"",
            github:"",
            location:"",
            followers:"",
            following:"",
            followersLink:"",
            followingLink:"",
        }
    },
    methods: {
        async getUser(){
            const res = await fetch('https://api.github.com/users/'+document.getElementById('uname').value)
            const result = await res.json()
            if(result.message!="Not Found"){
                this.pic = result.avatar_url;
                this.username = result.login;
                this.name = result.name
                this.bio = result.bio;
                this.twitter = "https://twitter.com/"+result.twitter_username;
                this.twitter_username = result.twitter_username;
                this.blog = 'https://'+result.blog;
                this.github = result.html_url
                this.location = result.location;
                this.followers = result.followers
                this.following = result.following;
                this.followersLink = "https://github.com/"+this.username+"?tab=followers"
                this.followingLink = "https://github.com/"+this.username+"?tab=following"
                console.log(result)
                document.getElementById('card').hidden=false
            } else{
                alert(result.message)
            }
            if(result.twitter_username==null){
                document.getElementById('twitter').hidden = true
            } else{
                document.getElementById('twitter').hidden = false
            }
            if(result.blog==""){
                document.getElementById('blog').hidden = true
            } else{
                document.getElementById('blog').hidden = false
            }
            if(result.location==null){
                document.getElementById('location').hidden = true
            } else{
                document.getElementById('location').hidden = false
            }
            if(result.location==null){
                document.getElementById('bio').hidden = true
            } else{
                document.getElementById('bio').hidden = false
            }
            if(result.bio==null){
                document.getElementById('bio').hidden = true
            } else{
                document.getElementById('bio').hidden = false
            }
        }
    }
})
script.mount("#app")