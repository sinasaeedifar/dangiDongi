export default async function Page() {
    await new Promise(resolve => setTimeout(resolve, 6000));
    return <h4>Folder 1 component Loaded</h4>
}