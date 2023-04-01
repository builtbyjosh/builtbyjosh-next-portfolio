import { db } from "../../firebase/config";
import {
  collection,
  addDoc,
  updateDoc,
  doc,
  deleteDoc,
  getDoc,
  getDocs,
} from "firebase/firestore";

const getAllProjects = async () => {
  const querySnapshot = await getDocs(collection(db, "project"));
  const projectsArr = [];
  querySnapshot.forEach(async (proj) => {
    projectsArr.push({ uid: proj.id, ...proj.data() });
  });
  return projectsArr;
};

const getProjectById = async (projectId) => {
  const projectRef = doc(db, "project", projectId);
  await getDoc(projectRef);
};

const addProject = async ({ title, desc, technologies, link }) => {
  try {
    await addDoc(collection(db, "project"), {
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

const deleteProject = async (projectId) => {
  try {
    const projectRef = doc(db, "project", projectId);
    await deleteDoc(projectRef);
  } catch (err) {
    console.log(err);
  }
};

const updateProject = async ({
  projectId,
  title,
  desc,
  technologies,
  link,
}) => {
  try {
    const projectRef = doc(db, "project", projectId);
    console.log("projectRef:", projectRef);
    await updateDoc(projectRef, {
      title: title,
      desc: desc,
      technologies: technologies,
      link: link,
      updatedAt: new Date().getTime(),
    });
  } catch (err) {
    console.error(err);
  }
};

export {
  addProject,
  deleteProject,
  updateProject,
  getProjectById,
  getAllProjects,
};
