<%@ Page Title="" Language="C#" MasterPageFile="~/Desktop.Master" AutoEventWireup="true" CodeBehind="Default.aspx.cs" Inherits="AspWithVue.Internal.Default" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
  <div id="app"></div>
</asp:Content>
<asp:Content ID="Content3" ContentPlaceHolderID="ContentScript" runat="server">
    <script src="../src/bundle/dist/build.js"></script>
</asp:Content>
<%--  --%>
