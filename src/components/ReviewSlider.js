import React, { useState } from "react";
import { Avatar, Box, Typography } from "@mui/material";
import styled from "styled-components";
import { deepOrange, deepPurple } from "@mui/material/colors";
import { Stack } from "react-bootstrap";
import Stars from "./Stars";
const ReviewSlider = ({ reviews = [] }) => {
  return (
    <>
      <ul>
        <Typography
          variant="h5"
          sx={{
            marginBottom: "15px",
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          Reviews:
          <Typography variant="body1">
            ({reviews.length} customer reviews)
          </Typography>
        </Typography>
        {reviews.map((review, index) => {
          return (
            <li key={index}>
              <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <Avatar sx={{ background: "#49a6e9" }}>
                  {review?.username?.substring(0, 1)}
                </Avatar>
                <Typography>{review?.username}</Typography>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "baseline",
                  gap: "10px",
                  marginTop: "10px",
                  marginLeft: "10px",
                }}
              >
                <Stars stars={review?.rating} />
                <Typography variant="body1">{review?.description}</Typography>
              </Box>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default ReviewSlider;
