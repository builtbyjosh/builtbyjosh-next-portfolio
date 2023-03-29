import { db } from "../firebase/config";
import {
  collection,
  addDoc,
  updateDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";

const addProject = async ({ id, title, desc, technologies, link }) => {
  try {
    await addDoc(collection(db, "project"), {
      id: id,
      title: title,
      desc: desc,
      technologies: technologies,
      link: link,
      createdAt: new Date().getTime(),
    });
  } catch (err) {
    console.error(err);
  }
};

const deleteProject = async (docId) => {
  try {
    const projectRef = doc(db, "project", docId);
    await deleteDoc(projectRef);
  } catch (err) {
    console.log(err);
  }
};

export { addProject, deleteProject };
