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

Researchers in computational biology and other scientific fields often encounter the challenge of selecting the most appropriate computational methods to analyze their data. To determine the strengths of each method or to make recommendations on the best options for an analysis, benchmarking studies are conducted, which rigorously compare the performance of different methods using well-characterized benchmark datasets. However, to ensure that the results are reliable, unbiased, and informative, benchmarking studies must be carefully designed and executed. [*Weber et al. (2019)*](https://pubmed.ncbi.nlm.nih.gov/31221194/) provided a set of practical guidelines and recommendations for conducting benchmarking analyses of high quality. 

As single-cell technologies continue to advance, an increasing number of analysis tools are becoming available to researchers. Consequently, there is a growing need for datasets and methods that support systematic benchmarking and evaluation of these tools.  Validating and benchmarking analysis tools for single-cell measurements is part of the "Eleven grand challenges in single-cell data science" [[*Lähnemann et al. (2020)*](https://pubmed.ncbi.nlm.nih.gov/32033589/)].

Benchmarking can be approached at two different level:

- In silico
- wet lab experiment

### In silico benchmark experiments
The validation and comparison of tools in the field of simulation is an intriguing area. Despite the fact that simulators have several limitations, there has been a significant effort in the past few years to enhance their power, as noted by [*Cao et al. (2021)*](https://pubmed.ncbi.nlm.nih.gov/34824223/). The scDesign3, a newly published simulator by [*Song et al. (2023)*](https://pubmed.ncbi.nlm.nih.gov/37169966/), appears to be a versatile tool that is capable of overcoming some of the limitations of other existing simulators, according to the developers.

### Wet lab experiment

Over the past few years, there has been a significant increase in the number of published single-cell omics studies, which serve as valuable resources for benchmark experiments. In particular, [*Svensson et al. (2020)*](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7698659/) have compiled a comprehensive collection of single-cell omics datasets with manually curated metadata. As part of the implementation study of the single-cell omics community, we are creating a series of datasets specifically designed for benchmarking computational tools that focus on single-cell tumor heterogeneity.


#### Benchmark experiments addressing tumor heterogeneity

[*Tumor heterogeneity*](https://www.cancer.gov/publications/dictionaries/cancer-terms/def/tumor-heterogeneity), where distinct cancer cells exhibit diverse morphological and phenotypic profiles, including gene expression, metabolism, and proliferation, poses challenges for molecular prognostic markers and patient classification for targeted therapies. Various omics technologies, such as bulk [[*Babu & Snyder (2023)*](https://pubmed.ncbi.nlm.nih.gov/37119971/)] and single-cell omics [[*Flynn et al. (2023)*](https://pubmed.ncbi.nlm.nih.gov/37159875/)] approaches, have enabled the characterization of diverse molecular layers at an unprecedented scale and resolution, offering a comprehensive perspective on the behavior of tumors. The integration of multiple omics datasets enables systematic exploration of diverse molecular information [[*Yue et al. (2023)*](https://pubmed.ncbi.nlm.nih.gov/36723121/)] at each biological layer, but also presents challenges in extracting meaningful insights from the exponentially growing volume of multi-omics data. To address this challenge, efficient algorithms are required to dig into the data and reveal the underlying complexities of cancer's intricate biological processes. The past few years have seen a proliferation of new computational methods for analyzing single-cell omics data, which can make it challenging to select the most appropriate tool for a particular task.  As a result, it is crucial to establish benchmarking platforms [[*Mangul et al. (2019)*](https://www.nature.com/articles/s41467-019-09406-4), [*Decamps et al. (2021)*](https://bmcbioinformatics.biomedcentral.com/articles/10.1186/s12859-021-04381-4), [OpenEBench](https://openebench.bsc.es/), [Omnibenchmark](https://omnibenchmark.pages.uzh.ch/omb-site/), [*Knight et al. (2023)*](https://pubmed.ncbi.nlm.nih.gov/36847692/)] and datasets [[*Tian et al. (2018)*](https://www.refine.bio/experiments/SRP155039/designing-a-single-cell-rna-sequencing-benchmark-dataset-to-compare-protocols-and-analysis-methods-rnamix-sort-seq), [Refine.bio](https://www.refine.bio/)] in order to create a controlled environment for the validation of bioinformatics tools in the field of single-cell omics analysis.

##### Healthy and diseases published single cell datasets

[*CELLxGENE*](https://cellxgene.cziscience.com/datasets) is a suite of tools that help scientists to find, download, explore, analyze, annotate, and publish single cell datasets. it is characterised by the possibility to download a wide set of published single cell experiments as h5 or seurat (v3) format.  

##### Tian et al. (2019) dataset
As part of [*their article*](https://pubmed.ncbi.nlm.nih.gov/31133762/) they created ‘pseudo cells’ from up to five distinct human lung adenocarcinoma cell lines. GEO dataset [GSM3618014](https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSM3618014) contains the mixture of five cell lines: 

- H2228 (PTPN3 KO [[*Jung et al (2012)*](https://pubmed.ncbi.nlm.nih.gov/22334442/)], ML4-ALK Fusion [[*Isozaki et al (2015)*]](https://pubmed.ncbi.nlm.nih.gov/26719536/))
- H1975 (EGFR L858R and T790M mutations [[*Zhao et al. 2015*](https://pubmed.ncbi.nlm.nih.gov/25483995/)])
- A549 (KRAS p.G12S, growth and proliferation,  PMID: [*Yoon et al. (2010)*](https://pubmed.ncbi.nlm.nih.gov/20358631/)
- H838
- HCC827 (EGFR L858R mutation [[*Juchum et al. (2015)*](https://www.sciencedirect.com/topics/medicine-and-dentistry/hcc827-cell-line)])

Data were generated using 10XGenomics v2 chemistry.
The raw count table was provided without the association of the cell lines to each cell. We have assigned the cell line name to each cell via the similarity between single cell clusters and cell lines bulk data from CCLE database. The annotated count table and the full procedure used for the annotation are present a figshare dataset [[doi.org/10.6084/m9.figshare.23274413.v1](https://doi.org/10.6084/m9.figshare.23274413.v1)]

##### PC9 dataset
In GEO NCBI repository are available single cell data on PC9 untreated lung cancer cell line done in two different labs, using both 10XGenomics and Drop-seq platforms and produced from in vitro culture or xenograph experiments.

- set1: GSM3972657 PC9 in vitro dropseq Chicago (2500 cells)
- set2: SM4494347 PC9 in vitro dropseq Chicago (12000 cells)
- set3: GSM3972651 PC9 in vitro 10XGenomics Chicago (12649 cells) 
- set4: GSM6106787 PC9 in vitro 10XGenomics Berkeley (413 cells)
- set5: GSM4869650 PC9 xenograft dropseq Chicago (29983 cells)
- set6: GSM3972674 PC9 and U937 in vitro dropseq Chicago (2634 cells)
- set7: BE1 (see below) GSE243665 PC9 in vitro 10XGenomics Turin (4492 cells)

These datasets, because of their differences, i.e. platforms, growth, labs, represent an ideal instrument to benchmark batch removal methods as well as integration methods. The seven sets are available as datasets with the same gene annotation (ensemblID:Symbol). Each set has the cellID with the extension _s(1:5) and set6 has two extensions _s6PC9 and _s6U937. These datasets and the script used for annotation are available as figshare repository ([*10.6084/m9.figshare.23626407*](https://figshare.com/articles/dataset/PC9_cell_line_scRNAseq_datasets/23626407)). 

##### 77 annotated scRNAseq tumor datasets
Gavish and collaborators [[*Nature 2023*](https://pubmed.ncbi.nlm.nih.gov/37258682/)] have recenty curated, annotated and integrated the data from 77 different single cell transcriptomics studies encompassing a total of 1,163 tumour samples covering 24 tumour types and more than 23 milions cells. The data are accessible at [**3CA site**](https://www.weizmann.ac.il/sites/3CA/).

##### SCONE datasets
As part of the Single Cell Community implementation study we are focusing in providing a set of benchmark experiments to address the extraction of biological knowledge from "controlled" cancer heterogeneity.

###### BE1

We have done a 10XGenomics scRNAseq experiment including the following elements:

-  PC9, 4492 sequenced cells (EGFR Del19, activating mutation, PMID: [*Simonetti et al. (2010)*](https://pubmed.ncbi.nlm.nih.gov/21167064/) 
-  A549, 6898 sequenced cells (KRAS p.G12S, growth and proliferation,  PMID: [*Yoon et al. (2010)*](https://pubmed.ncbi.nlm.nih.gov/20358631/) 
-  NCI-H596 (HTB178), 2965 sequenced cells (MET Del14 , enhanced protection from apoptosis and cellular migration PMID: [*Cerqua et al. (2022)*](https://pubmed.ncbi.nlm.nih.gov/35636967/) 
-  NCI-H1395 (CRL5868), 2673 sequenced cells (BRAF p.G469A, gain of function, resistant to all tested MEK +/− BRAF inhibitors, PMID: [*Negrao et al. (2020)*](https://pubmed.ncbi.nlm.nih.gov/32540409/)) 
-  DV90, 2998 sequenced cells (ERBB2 p.V842I, increases kinase activity, PMID: [*Boese et al. (2013)*](https://pubmed.ncbi.nlm.nih.gov/23220880/) 
-  HCC78, 2748 sequenced cells (SLC34A2-ROS1 Fusion, ROS1 inhibitors have antiproliferative effect PMID: [*Davies et al. (2012)*](https://pubmed.ncbi.nlm.nih.gov/22919003/) 
- CCL.185.IG, 6354 sequenced cells [*EML4-ALK Fusion-A549 Isogenic Cell*](https://www.atcc.org/products/ccl-185ig) 

<img border="0" src="../../images/drivers_minimal_relations.jpg" width="500px">

The above figure described the driver genes associated to each cell line. Only a minimal part of the connections has been shown to easy readability of the image. Full list of the interactions depicted by [*IPA*](https://digitalinsights.qiagen.com/products-overview/discovery-insights-portfolio/analysis-and-visualization/qiagen-ipa/?utm_source=QDI_GA_IPA&cmpid=QDI_GA_IPA&gclid=CjwKCAjwpuajBhBpEiwA_Ztfha6eGDCSYCgWJdU_WLaESr4az3OOXllkow2o0Xmfxz8OhFo7Z2cpxhoC4okQAvD_BwE) are available at figshare [[*10.6084/m9.figshare.23284748*](https://doi.org/10.6084/m9.figshare.23284748.v1)]. All driver genes have been observed in resistence occuring upon treatment with [*Isomertinib*](https://en.wikipedia.org/wiki/Osimertinib) of EGFR mutated lung cancers [[*Gomatou et al. (2023)*](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9913144/)].
  
The experiment was done using CellPlex technology from 10XGenomics allowing multiplexing samples into a single channel and therefore removing unwanted batch effects.

The count tables from the entire BE1 experiment are available through an [*R Shiny app*](http://130.192.212.153:3838/), allowing users to construct datasets encompassing different cell lines at varying ratios. An R package providing the same functionalites of the R Shiny app is available at [*github.com/kendomaniac/BE1*](https://github.com/kendomaniac/BE1).
  
**Actual state of the project:** Fully sequenced, raw data deposited to GEO: GSE243665 (Raw data under embargo till the pubblication of the dataset).

<img border="0" src="../../images/be1.png" width="700px">

The above figure show the sequencing statistics of the 7 cell lines.

**Processed data are available at:** [*10.6084/m9.figshare.23939481*](https://doi.org/10.6084/m9.figshare.23939481.v1)
  
For further information please contact **raffaele dot calogero at unito dot it**


###### BE2

The cell lines from for BE1 will be used to generate surrogate tumor-tissues for spatial transcriptomics, by embedding in matrigel pools of the 7 cell lines at different ratios. For each cell ratio we will generate a slide (2 sections) using Visium for FFPE samples and  six slides using [*Curio Bioscience*](https://curiobioscience.com/product/) spatial platform for OTC fresh frozen samples. 
In total we expect produce three cell lines ratios:
  
- Cell line 1 40%, cell line 2 25% cell line 3 20%, cell line 4 5%, PBMC 10%
- Cell line 1 45% cell line 2 25%, cell line 3 10%, cell line 4 10%, cell line 5 5%, PBMC 5%
- Cell line 1 25%, cell line 2 25% cell line 3 10% cell line 4 10%, cell line 4 10%, cell line 5 5%, cell line 6 5%, cell line 7 5%, PBMC 5%.
  
**Actual state of the project:** Expecting results from BE1. 

**Expected data availability:** March 2024

###### BE3

A549, CCL.185.IG, NCI-H596 (HTB178) and PC9 cell lines will be used to generate combined scRNAseq and scATACseq experiment using [*10X genomics technology for multi-omics*](https://www.10xgenomics.com/products/single-cell-multiome-atac-plus-gene-expression).

**Actual state of the project:** Ordered 10XGenomics multi-omics kit. 

**Expected data availability:** January 2024


 
