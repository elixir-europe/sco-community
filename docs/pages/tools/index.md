---
transparentnav: false
fixednav: true
logosnav: true
layout: markdown
group: Tools
---
<p style="color: #f47d21">{{ page.group }}</p>

# Identifying the most appropriate and performant analysis tools

A plethora of SCO tools exist, and yet standards on how to benchmark or evaluate the accuracy of each tool are lacking. Furthermore, most benchmark efforts are focused on certain cell types or tissues.

- The first goal is the identification of a few scRNA-seq datasets for developing the rules to be used for defining datasets suitable to become benchmarking cases. We aim to create a central pipeline to benchmark SCO tools and define standard datasets for such benchmarks. The outcomes of benchmarking and software challenges allow data scientists to make an informed decision on the software to be used in their analytical workflows.
- To facilitate findability and usability, we aim to contribute to tool registries and provide portable software environments of the most commonly used tools/workflows.
- In the long term, we aim to provide cloud deployable analysis pipelines that utilise Galaxy and Chipster platforms, as well as providing curated datasets for user driven benchmark on the OpenEBench infrastructure.


## Benchmark experiments

[*Tumor heterogeneity*](https://www.cancer.gov/publications/dictionaries/cancer-terms/def/tumor-heterogeneity), where distinct cancer cells exhibit diverse morphological and phenotypic profiles, including gene expression, metabolism, and proliferation, poses challenges for molecular prognostic markers and patient classification for targeted therapies. Various omics technologies, such as bulk [[*Babu & Snyder*](https://pubmed.ncbi.nlm.nih.gov/37119971/)] and single-cell omics [[*Flynn et al.*](https://pubmed.ncbi.nlm.nih.gov/37159875/)] approaches, have enabled the characterization of diverse molecular layers at an unprecedented scale and resolution, offering a comprehensive perspective on the behavior of tumors. The integration of multiple omics datasets enables systematic exploration of diverse molecular information [[*Yue et al.*](https://pubmed.ncbi.nlm.nih.gov/36723121/)] at each biological layer, but also presents challenges in extracting meaningful insights from the exponentially growing volume of multi-omics data. To address this challenge, efficient algorithms are required to dig into the data and reveal the underlying complexities of cancer's intricate biological processes. The past few years have seen a proliferation of new computational methods for analyzing single-cell omics data, which can make it challenging to select the most appropriate tool for a particular task.  As a result, it is crucial to establish benchmarking platforms [[*Mangul et al.*](https://www.nature.com/articles/s41467-019-09406-4), [*Decamps et al.*](https://bmcbioinformatics.biomedcentral.com/articles/10.1186/s12859-021-04381-4), [OpenEBench](https://openebench.bsc.es/), [*Knight et al.*](https://pubmed.ncbi.nlm.nih.gov/36847692/)] and datasets [[*Tian et al.*](https://www.refine.bio/experiments/SRP155039/designing-a-single-cell-rna-sequencing-benchmark-dataset-to-compare-protocols-and-analysis-methods-rnamix-sort-seq), [Refine.bio](https://www.refine.bio/)] in order to create a controlled environment for the validation of bioinformatics tools in the field of single-cell omics analysis.
As part of the Single Cell Community implementation study we are focusing in providing a set of benchmark experiments to address the extraction of biological knowledge from "controlled" cancer heterogeneity.

### BE1

We are performing a 10XGenomics scRNAseq experiment including the following elements:

-  PC9 (EGFR Del19, activating mutation, PMID: [Simonetti et al. 2010](https://pubmed.ncbi.nlm.nih.gov/21167064/) 
-  A549 (KRAS p.G12S, growth and proliferation,  PMID: [Yoon et al. 2010](https://pubmed.ncbi.nlm.nih.gov/20358631/) 
-  NCI-H596 (MET Del14 , enhanced protection from apoptosis and cellular migration PMID: [Cerqua et al. 2022](https://pubmed.ncbi.nlm.nih.gov/35636967/) 
-  NCI-H1395 (BRAF p.G469A, gain of function, resistant to all tested MEK +/− BRAF inhibitors, PMID: [Negrao et al. 2020](https://pubmed.ncbi.nlm.nih.gov/32540409/)) 
-  DV90 (ERBB2 p.V842I, increases kinase activity, PMID: [Boese et al. 2013](https://pubmed.ncbi.nlm.nih.gov/23220880/) 
-  HCC78 (SLC34A2-ROS1 Fusion, ROS1 inhibitors have antiproliferative effect PMID: [Davies et al. 2012](https://pubmed.ncbi.nlm.nih.gov/22919003/) 
-  [EML4-ALK Fusion-A549 Isogenic Cell](https://www.nature.com/articles/d42473-019-00011-z) 
-  White cells from donor buffy coat (PBMC)

<p align="center">
  <img border="0" src="../../images/fig1_tools_BE1.jpg" width="500px">
<p>

The above figure shows the pathways underlying the mutations characterising the seven tumor cell lines.

PBMC will be marked with Biolegend TotalSeq™-B human universal cocktail v1.0, to annotate immunological cell types thanks to the help of an experienced immunologist. 
10XGenomics analysis will be performed using CellPlex 10XGenomics technology, allowing samples labelling.

The count tables from the entire BE1 experiment will be made available through an R Shiny app, allowing users to construct datasets encompassing different cell lines at varying ratios.
  
**Actual state of the project:** collecting and growing cell lines. 

**Expected data availability:** September 2023






