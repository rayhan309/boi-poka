import Swal from "sweetalert2";

const getStoredBook = () => {

    const storedBookSTR = localStorage.getItem("readList")

    if (storedBookSTR) {
        const storedBookData = JSON.parse(storedBookSTR);
        return storedBookData;
    } else {
        return [];
    }

}

const addToStoredDB = (id) => {

    const storedBookData = getStoredBook();

    if (storedBookData.includes(id)) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "This Book Alredy Add Read List!",
            // footer: '<a class="text-blue-600" href="#">Why do I have this issue?</a>'
        });
    } else {
        storedBookData.push(id)
        const data = JSON.stringify(storedBookData);
        localStorage.setItem("readList", data)
    }

}

export { addToStoredDB, getStoredBook }