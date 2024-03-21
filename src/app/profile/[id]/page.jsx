export default function UserProfile({ params}) {
    return (
        <div className="flex flex-col item-center justify-center min-h-screen py-2">

            <h1>Profile</h1>
            <hr />
            <p className="text-4xl">Profile inner  </p>
            <span> {params.id}</span>
        </div>
    )
}