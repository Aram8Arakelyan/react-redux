export const loadCurrentUser = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                name: 'Test user'
            })
        }, 2000)
    })
}