const IgniteStudios = ({ sticky }: { sticky?: boolean }) => {
    return (
        <>
            {sticky ? <StickyBottomBar /> : <BottomBar />}
        </>

    )
}

export default IgniteStudios

const BottomBar = () => {
    return (
        <div className="border-t py-2 text-center">
            <p className="text-sm text-muted-foreground">
                Made with ❤️ by <a className="hover:underline hover:text-primary transition-colors" href="https://ronit-ghosh.vercel.app">Ignite Studios</a>
            </p>
        </div>
    )
}

const StickyBottomBar = () => {
    return (
        <div className="absolute bottom-0 border-t py-2 text-center">
            <p className="text-sm text-muted-foreground">
                Made with ❤️ by <a className="hover:underline hover:text-primary transition-colors" href="https://ronit-ghosh.vercel.app">Ignite Studios</a>
            </p>
        </div>
    )
}