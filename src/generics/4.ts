type User = {
  name: string;
  surname: string;
  email: string;
  password: string;
}

function createOrUpdateUser(initialValues: Partial<User>): User {
    // Оновлення користувача
    const DefaultUser: User = {
        name: '',
        surname: '',
        email: '',
        password: '',
    }
    return { ...DefaultUser, ...initialValues}
}

createOrUpdateUser({ 
  email: 'user@mail.com', 
  password: 'password123' 
});