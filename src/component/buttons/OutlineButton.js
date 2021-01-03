export const OutlinedButton = ({ onTap = () => { }, title = "" }) => {
    return (
        <button onClick={onTap} className="mx-2 hover:bg-primary-dark hover:text-white dark:hover:bg-primary-light dark:hover:text-black bg-primary-light dark:bg-primary-dark text-gray-900 dark:text-white rounded border-2 py-2 px-4">
            {title}
        </button>

    )
}