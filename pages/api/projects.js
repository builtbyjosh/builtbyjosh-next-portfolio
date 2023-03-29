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
  const querySnapshot = await getDocs(collection(db, "projects"));
  let projectsArr = [];

  querySnapshot.forEach((project) => {
    let projectObj = project.data();
    projectObj.uuid = project.id;
    console.log("PROJECT OBJ: ", projectObj);
    projectsArr.push(projectObj);
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
