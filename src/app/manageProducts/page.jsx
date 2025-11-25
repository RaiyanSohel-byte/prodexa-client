"use client";
import ProtectedRoute from "@/components/protected/ProtectedRoute";
import LoadingSpinner from "@/components/shared/LoadingSpinner";
import useAuth from "@/hooks/useAuth";
import useAxios from "@/hooks/useAxios";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { MdManageHistory } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";
import { FaSearch, FaTrash } from "react-icons/fa";
import Link from "next/link";
import Swal from "sweetalert2";
import EmptyProductList from "@/components/shared/EmptyProductList";

const ManageProducts = () => {
  const axiosInstance = useAxios();
  const { user, loading, setLoading } = useAuth();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    if (!user?.email) return;

    setLoading(true);

    axiosInstance.get(`/products?email=${user.email}`).then((res) => {
      setProducts(res.data);
      setLoading(false);
    });
  }, [axiosInstance, user, setLoading]);
  if (loading) {
    return <LoadingSpinner />;
  }
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosInstance.delete(`/products/${id}`).then((res) => {
          if (res.data.deletedCount) {
            setProducts(products.filter((product) => id !== product._id));
            Swal.fire({
              title: "Deleted!",
              text: "Your product has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };
  return (
    <ProtectedRoute>
      {products.length > 0 ? (
        <div className="py-10">
          <header className="mb-10 text-center">
            <h1 className="text-4xl font-extrabold text-accent flex items-center justify-center">
              <MdManageHistory className="mr-3 text-accent" /> Manage Your
              Product
            </h1>
            <p className="mt-2 text-lg text-accent/70">
              Manage your products below to view and delete item from the
              inventory.
            </p>
          </header>
          <div className="overflow-x-auto max-w-7xl mx-auto">
            <table className="table table-zebra">
              {/* head */}
              <thead>
                <tr>
                  <th>Serial</th>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Category</th>
                  <th>Priority</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product, index) => (
                  <tr key={product._id}>
                    <th>{index + 1}</th>
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="relative w-12 h-12">
                          <Image
                            src={product.image}
                            alt={product.name}
                            fill
                            className="object-cover rounded-lg"
                          />
                        </div>
                        <h3 className="font-semibold">{product.name}</h3>
                      </div>
                    </td>
                    <td>${Number(product.price).toFixed(2)}</td>
                    <td>
                      <h3 className="text-accent font-bold">
                        {product.category.toUpperCase()}
                      </h3>
                    </td>
                    <td>
                      <span
                        className={
                          product.priority === "high"
                            ? "badge badge-soft badge-error badge-outline font-bold"
                            : product.priority === "medium"
                            ? "badge badge-soft badge-warning badge-outline font-bold"
                            : "badge badge-soft badge-success badge-outline font-bold"
                        }
                      >
                        {product.priority.toUpperCase()}
                      </span>
                    </td>
                    <td>
                      <div className="flex items-center">
                        <Link
                          href={`/${product._id}`}
                          className="btn border-gray-300"
                        >
                          <FaSearch color="gray" />
                        </Link>
                        <button
                          onClick={() => handleDelete(product._id)}
                          className="btn ml-2 border-gray-300"
                        >
                          <FaTrash color="red" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <div className="min-h-screen flex justify-center items-center">
          <EmptyProductList />
        </div>
      )}
    </ProtectedRoute>
  );
};

export default ManageProducts;
