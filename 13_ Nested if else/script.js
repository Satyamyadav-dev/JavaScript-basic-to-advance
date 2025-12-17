const userName = 'satya'
const userAge = 22

if(userAge >= 18 || userAge == 24)
    {
    console.log('user is college student');
    if(userAge>= 20) 
        {
        console.log(`user is ${userAge} old`);
        if(userName.length > 5)
            {
            console.log('username is greater than 5 character.');
            
        }
        else if (userName.length < 5)
             {
            console.log('username is to short');
        }
    }
   
 
}