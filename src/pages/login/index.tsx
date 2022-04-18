export const Login = () => {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const { username, password } = e.currentTarget;
        console.log(e.currentTarget.username.value);
        fetch(`${process.env.REACT_APP_API_URL}/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username: username.value,
                password: password.value,
            }),
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="username">用户名</label>
                <input type="text" id="username" />

                <label htmlFor="password">密码</label>
                <input type="text" id="password" />
            </div>
            <div>
                <input type="submit" value="提交" />
            </div>
        </form>
    );
};
