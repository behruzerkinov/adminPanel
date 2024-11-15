import { useEffect, useState } from "react";

interface Category {
  id: string;
  name_en: string;
  name_ru: string;
  image_src: string;
  created_at: string;
}

interface EditModalProps {
  isOpen: boolean;
  onClose: () => void;
  category: Category;
  onSave: (updatedCategory: Category) => void;
}

const EditModal = ({ isOpen, onClose, category, onSave }: EditModalProps) => {
  const [nameEn, setNameEn] = useState(category.name_en);
  const [nameRu, setNameRu] = useState(category.name_ru);
  const [imageSrc, setImageSrc] = useState(category.image_src);
  const [selectedImage, setSelectedImage] = useState<File | null>(null);

  const handleSave = async () => {
    let formData = new FormData();
    formData.append("name_en", nameEn);
    formData.append("name_ru", nameRu);
    if (selectedImage) {
      formData.append("image", selectedImage);
    }

    try {
      const response = await fetch(
        `https://autoapi.dezinfeksiyatashkent.uz/api/categories/${category.id}`,
        {
          method: "PUT",
          body: formData,
        }
      );

      if (response.ok) {
        onSave({ ...category, name_en: nameEn, name_ru: nameRu, image_src: imageSrc });
        onClose();
      } else {
        console.error("Error updating category:", response.status);
      }
    } catch (error) {
      console.error("Error updating category:", error);
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedImage(e.target.files[0]);
      setImageSrc(URL.createObjectURL(e.target.files[0]));
    }
  };

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center z-50 ${
        isOpen ? "block" : "hidden"
      }`}
    >
      <div className="bg-gray-800 rounded-lg shadow-lg p-6 w-1/3">
        <h2 className="text-xl font-bold text-white mb-4">Edit Category</h2>
        <div className="mb-3">
          <label htmlFor="nameEn" className="block text-white text-sm font-bold mb-2">
            Name (English)
          </label>
          <input
            type="text"
            id="nameEn"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={nameEn}
            onChange={(e) => setNameEn(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="nameRu" className="block text-white text-sm font-bold mb-2">
            Name (Russian)
          </label>
          <input
            type="text"
            id="nameRu"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={nameRu}
            onChange={(e) => setNameRu(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="imageSrc" className="block text-white text-sm font-bold mb-2">
            Image
          </label>
          <input type="file" accept="image/*" onChange={handleImageChange} />
          {selectedImage && (
            <img
              src={URL.createObjectURL(selectedImage)}
              alt="Selected Image"
              className="w-16 h-16 mt-2"
            />
          )}
        </div>
        <div className="flex justify-end">
          <button
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mr-2"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleSave}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default function Table() {
  const [table, setTable] = useState<Category[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentCategory, setCurrentCategory] = useState<Category | null>(null);

  useEffect(() => {
    fetch("https://autoapi.dezinfeksiyatashkent.uz/api/categories", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => setTable(data.data));
  }, []);

  const handleEdit = (category: Category) => {
    setCurrentCategory(category);
    setIsModalOpen(true);
  };

  const handleSave = async (updatedCategory: Category) => {
    try {
      const response = await fetch(
        `https://autoapi.dezinfeksiyatashkent.uz/api/categories/${updatedCategory.id}`,
        {
          method: "PUT",
          body: JSON.stringify(updatedCategory),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.ok) {
        const updatedTable = table.map((item) =>
          item.id === updatedCategory.id ? updatedCategory : item
        );
        setTable(updatedTable);
        setIsModalOpen(false);
      } else {
        console.error("Error updating category:", response.status);
      }
    } catch (error) {
      console.error("Error updating category:", error);
    }
  };

  return (
    <div className="bg-gray-900 text-white">
      <table className="table-auto w-full">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name (English)</th>
            <th>Name (Russian)</th>
            <th>Image</th>
            <th>Created At</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {table.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name_en}</td>
              <td>{item.name_ru}</td>
              <td>
                <img src={item.image_src} alt={item.name_en} className="w-16 h-16" />
              </td>
              <td>{item.created_at}</td>
              <td>
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
                  onClick={() => handleEdit(item)}
                >
                  Edit
                </button>
                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <EditModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        category={currentCategory || {
          id: "",
          name_en: "",
          name_ru: "",
          image_src: "",
          created_at: "",
        }}
        onSave={handleSave}
      />
    </div>
  );
}
