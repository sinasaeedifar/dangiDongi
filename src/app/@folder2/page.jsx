
export default async function Page() {
    await new Promise(resolve => setTimeout(resolve, 8000));
    return <h4>folder 2 component load two seconds later</h4>
}