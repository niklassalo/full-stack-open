import Name from "./Name"

const Persons = ({ persons, searchInput }) => {
    return (
        <div>
            {persons.filter(person =>
                person.name.toLowerCase().includes(searchInput.toLowerCase()) ||
                person.number.includes(searchInput)
            ).map(person => <Name key={person.name} name={person} />)}
        </div>
    )
}

export default Persons