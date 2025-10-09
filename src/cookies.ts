const cookies: string[] = ["chocolate chip", "sugar", "macademia"];

export function printCookies() {
    for (let i = 0; i < cookies.length; i++) {
        console.log(cookies[i]);
    }
}

printCookies();