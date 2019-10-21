# impact-dashboard
Getting started:
---

1. Install the dependencies in the root directory and in the client folder.
2. On the root directory, there should be a file named ```serverless.yml```. Open that up. 
    * In the provider section, change the profile to match your ```credentials``` file in your ```.aws``` folder
    * Change the stage to ```dev-${your name}``` if you're developing, or ```staging-1```/```staging-2``` if you are doing QA
    
Although we won't be using the queryShakespeare.js and /shakespeareQuotes endpoint, Nisa has the necessary env credentials

Use the command ```serverless deploy``` to deploy onto AWS. You should then see your functions under Lambda. If not, make sure your region is set to North Virginia
