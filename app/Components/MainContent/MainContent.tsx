import Cards from './Cards/Cards'
import Filter from './Filter/Filter'

export default function MainContent() {
    return (
        <div className="mx-auto flex max-w-7xl flex-col gap-5">
            <Filter />
            <Cards />
        </div>
    )
}
