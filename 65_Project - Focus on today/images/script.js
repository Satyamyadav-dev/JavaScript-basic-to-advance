const checkBoxList = document.querySelectorAll('.custome-checkbox')
const InputFields = document.querySelectorAll('.goal-input')
const error = document.querySelector('.error-label')
const progressBar = document.querySelector('.progress-bar')
const progressValue = document.querySelector('.progress-value')

const allGoals =  JSON.parse(localStorage.getItem('allGoals')) || {}

checkBoxList.forEach((checkbox) => {
    checkbox.addEventListener('click', (e) => {
        const allGoalAdded = [...InputFields].every((input) => {
            return input.value
        })

        if(allGoalAdded) {
            checkbox.parentElement.classList.toggle('completed')
            progressValue.style.width = '33.33%'
            const inputId = checkbox.nextElementSibling.id
            allGoals[inputId].completed = !allGoals[inputId].completed
            localStorage.setItem('allGoals', JSON.stringify(allGoals))
        }
        else {
            progressBar.classList.add('show-error')
        }

    })
})


InputFields.forEach((input) => {
    input.value = allGoals[input.id].name

    if(allGoals[input.id].completed){
        input.parentElement.classList.add('completed')
    }

    input.addEventListener('focus', () => {
        progressBar.classList.remove('show-error')
    })

    input.addEventListener('input', (e) => {
        allGoals[input.id] = {
            name: input.value,
            completed: false,
        }
        localStorage.setItem('allGoals', JSON.stringify(allGoals))
    })
  
})



