import { publish } from 'gh-pages';

publish(
    'src', // path to src directory
    {
        branch: 'gh-pages',
        repo: 'https://github.com/ABSTRAC7ION/egypt-main', // Update to point to your repository  
        user: {
            name: 'ABSTRAC7ION', // update to use your name
            email: 'ibrahims.suroor@gmail.com' // Update to use your email
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
)