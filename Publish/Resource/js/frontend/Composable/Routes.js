// export async function route(routeName, timeout = 500) {
//     try {
//         const timeoutPromise = new Promise((resolve) => setTimeout(resolve, timeout));
//         const routePromise = timeoutPromise.then(() => route(routeName));

//         // Await the route promise within zgRoute itself
//         const resolvedRoute = await routePromise;
//         return resolvedRoute;
//     } catch (error) {
//         console.error('zgRoute error:', error);
//         // Handle errors gracefully (e.g., display an error message to the user)
//         return null; // Or return a default value if desired
//     }
// }
