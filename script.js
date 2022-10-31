var userProfileIcon = document.getElementById('user-pic');
function toggleMenu(){
    userProfileIcon.addEventListener('click', function(event){
        document.getElementById('subMenu').style.display = 'block';
    });
};
toggleMenu();
