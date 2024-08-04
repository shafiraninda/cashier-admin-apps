import { useContext, useEffect, useMemo, useState } from "react";
import Card, { CardBody, CardHeader, CardLabel, CardTitle } from "../components/bootstrap/Card";
import DarkDataTable from "../components/DarkDataTable";
import PageWrapper from "../layout/PageWrapper/PageWrapper"
import useDarkMode from "../hooks/useDarkMode";
import SubHeaderCustom from "../components/SubHeaderCustom";
import Button from "../components/bootstrap/Button";
import MediaContext from "../contexts/mediaContext";
import Input from "../components/bootstrap/forms/Input";
import FormGroup from "../components/bootstrap/forms/FormGroup";
import Modal, { ModalBody, ModalHeader, ModalTitle } from "../components/bootstrap/Modal";
import Select from "../components/bootstrap/forms/Select";
import Textarea from "../components/bootstrap/forms/Textarea";
import { useFormik } from "formik";
import showNotification from "../components/extras/showNotification";
import Swal from "sweetalert2";

const FormModal = ({
    type,
    initialValue,
    setOpenModal,
    openModal
}) => {
    const options = [
        { label: 'Motor Matic', value: 'Motor Matic'},
        { label: 'Motor Bebek', value: 'Motor Bebek'}
    ]

    const formik = useFormik({
		initialValues: { ...initialValue},
		validate: (values) => {
			const errors = {};
			// if (!values.year) {
			// 	errors.year = 'Required';
			// }
		
			return errors;
		},
		onSubmit: (values) => {
			// const init = {}
			// if(values.year) {
			// 	init.year = moment(values.year).format('YYYY');
			// }
			// if(values.month) {
			// 	init.month = `${moment(values.year).format('YYYY')}-${moment(values.month).format('MM')}`
			// }
			// if(values.gl_mapping){
			// 	init.gl_mapping = values.gl_mapping.value
			// }
			// if (values.cost_center) {
			// 	init.cost_center= values.cost_center.value
			// }
			// setPage(1);
			// setFilter(init);
		},
	});

    useEffect(() => {
        formik.setValues(initialValue)
    }, [initialValue])
    
    return (
        <Modal
                isOpen={openModal}
                size='lg'
                isCentered
                setIsOpen={() => {
                    setOpenModal(false)
                }}
                isStaticBackdrop
            >
                <form>
                    <ModalHeader
                        isOpen={openModal}
                        setIsOpen={setOpenModal}>
                        <ModalTitle id='ModalPelanggan'>
                            {type === 'edit'? "Edit Data Pelanggan" : "Tambah Pelanggan Baru"}
                        </ModalTitle>
                    </ModalHeader>
                    <ModalBody>
                        <div className="row">
                            <div className="col-lg-6 col-sm-12">
                                <FormGroup label='Nama Pelanggan' id='nama' className='m-2'>
                                    <Input 
                                        type='text'
                                        value={formik.values.nama}
                                        // name='
                                        // className='col-md-3 col-4'
                                        placeholder='Nama Pelanggan'
                                        onChange={() => {}}
                                    />
                                </FormGroup>
                            </div>
                            <div className="col-lg-6 col-sm-12">
                                <FormGroup label='Alamat (Optional)' className='m-2'>
                                    <Input 
                                        type='text'
                                        id='alamat'
                                        value={formik.values.alamat}
                                        // name='
                                        // className='col-md-3 col-4'
                                        placeholder='Jl. Garuda'
                                        onChange={() => {}}
                                    />
                                </FormGroup>
                            </div>
                            <div className="col-lg-6 col-sm-12">
                                <FormGroup label='No. HP' className='m-2'>
                                    <Input 
                                        type='text'
                                        id='nomor'
                                        value={formik.values.nomor}
                                        // name='
                                        // className='col-md-3 col-4'
                                        placeholder='08xxxxxxxxxx'
                                        onChange={() => {}}
                                    />
                                </FormGroup>
                            </div>
                            <div className="col-lg-6 col-sm-12">
                                <FormGroup label='Plat Kendaraan' className='m-2'>
                                    <Input 
                                        type='text'
                                        id='plat'
                                        value={formik.values.plat}
                                        // name='
                                        // className='col-md-3 col-4'
                                        placeholder='ex: AB 1234 CD'
                                        onChange={() => {}}
                                    />
                                </FormGroup>
                            </div>
                            <div className="col-lg-6 col-sm-12">
                                <FormGroup label='Tipe Kendaraan' className='m-2'>
                                <Select
                                    id='tipe_kendaraan'
                                    value={formik.values.tipe_kendaraan}
                                    // name={ String }
                                    // className={ String }
                                    placeholder='Pilih Tipe Kendaraan'
                                    required
                                    list={options}
                                    />
                                </FormGroup>
                            </div>
                            <div className="col-lg-6 col-sm-12">
                                <FormGroup label='Merk Kendaraan' className='m-2'>
                                    <Input 
                                        type='text'
                                        id='merk_kendaraan'
                                        value={formik.values.merk_kendaraan}
                                        // name='
                                        // className='col-md-3 col-4'
                                        placeholder='Merk Kendaraan'
                                        onChange={() => {}}
                                    />
                                </FormGroup>
                            </div>
                            <div className="col-lg-6 col-sm-12">
                                <FormGroup label='Keluhan' className='m-2'>
                                    <Textarea
                                    id='keluhan'
                                    value={formik.values.keluhan}
                                    placeholder='Keluhan'
                                    title='Text area'
                                    />
                                </FormGroup>
                            </div>
                        </div>
                        <div className="d-flex justify-content-end gap-2 mt-2">
                                <Button color="danger" icon='Close' onClick={() => setOpenModal(false)}>Close</Button>
                                <Button color="warning" icon="Send">Save</Button>
                        </div>
                    </ModalBody>
                </form>
            </Modal>
    )
}

const Example = () => {
    const media = useContext(MediaContext);
    const { darkModeStatus } = useDarkMode()
    const [openModal, setOpenModal] = useState(false)
    const [openModalEdit, setOpenModalEdit] = useState(false)
    const [dataTemp, setDataTemp] = useState({})

    const initialValue = {
        nama: '',
        nomor: '',
        plat: '',
        alamat: '',
        tipe_kendaraan: '',
        merk_kendaraan: '',
        keluhan: ''

    }
    
    const dummyCustomer = [
        {
            nama: "Andi",
            nomor: "089763247680",
            plat: "AB 8379 VA",
            tipe_kendaraan: "Motor Matic",
            merk_kendaraan: "Yamaha",
            keluhan: "ganti oli"
        },
        {
            nama: "Budi",
            nomor: "089763247680",
            plat: "AB 8379 VA",
            tipe_kendaraan: "Motor Matic",
            merk_kendaraan: "Yamaha",
            keluhan: "ganti oli"
        },
        {
            nama: "Caca",
            nomor: "089763247680",
            plat: "AB 8379 VA",
            tipe_kendaraan: "Motor Matic",
            merk_kendaraan: "Yamaha",
            keluhan: "ganti oli"
        },
        {
            nama: "Dudi",
            nomor: "089763247680",
            plat: "AB 8379 VA",
            tipe_kendaraan: "Motor Matic",
            merk_kendaraan: "Yamaha",
            keluhan: "ganti oli"
        }
    ]

    const columns = useMemo(
        () => [
            {
                name: <div className="text-center"><b>Nama Pelanggan</b></div>,
                selector: (row) => row.nama
            },
            {
                name: <b>Kontak</b>,
                selector: (row) => row.nomor
            },
            {
                name: <b>Plat Kendaraan</b>,
                selector: (row) => row.plat
            },
            {
                name: <b className="text-center">Tipe Kendaraan</b>,
                selector: (row) => row.tipe_kendaraan
                    // {
                    // return (
                    //     <>
                    //         <span>{row.tipe_kendaraan}</span>
                    //         <br/>
                    //         <span>{row.tipe_kendaraan}</span>
                    //     </>
                    // )}
            },
            {
                name: <b className="text-center">Merk Kendaraan</b>,
                selector: (row) => row.merk_kendaraan
            },
            {
                name: <b className="text-center">Keluhan</b>,
                selector: (row) => row.keluhan
            },
            {
                name: <b>Action</b>,
				// eslint-disable-next-line react/no-unstable-nested-components
				cell: (row) => {
					return (
                        <div className="d-flex gap-1 justify-content-center">
                            <Button
                                size={media?.medium ? 'sm' : null}
                                icon='RemoveRedEye'
                                color='warning'
                                type='button'
                                isLight={darkModeStatus}
                                onClick={() => {}}
                            />
                            <Button
                                size={media?.medium ? 'sm' : null}
                                icon='Edit'
                                color='primary'
                                type='button'
                                isLight={darkModeStatus}
                                onClick={() => handleEdit(row) }
                            />
                            <Button
                                size={media?.medium ? 'sm' : null}
                                icon='DeleteOutline'
                                color='danger'
                                type='button'
                                isLight={darkModeStatus}
                                onClick={() => handleDelete(row)}
                            />
                        </div>
					);
				},
            }
        ]
    )

    const handleDelete = (item) => {
        Swal.fire({
            title: 'Are you sure?',
            text: 'This data will be deleted!',
            icon: 'info',
            showCancelButton: true,
            confirmButtonText: 'Yes',
        }).then(() => {
            console.log(item)
            Swal.fire('Success!', 'Data has been deleted', 'success');
            showNotification(
                'Success!',
                'Data has been deleted',
                'success',
            );
            // ComplainFormModule.create(payload)
            //     .then(() => {
            //         showNotification(
            //             'Success!',
            //             'Data has been saved Successfully',
            //             'success',
            //         );
            //         setIsOpen(false);
            //         setLoading(false);
            //         setDescription(null);
            //     })
            //     .catch((err) => {
            //         showNotification('Warning!', err, 'danger');
            //         setLoading(false);
            //     });
        });
    }

    const handleEdit = (item) => {
        setDataTemp(item)
        setOpenModalEdit(true)
    }

    return (
        <PageWrapper title="Page Example">
            <SubHeaderCustom/>
            <Card>
                <CardHeader>
                    <CardLabel icon="People">
                        <CardTitle>Customer</CardTitle>
                    </CardLabel>
                </CardHeader>
                <CardBody>
                    <div className="row align-content-center">
                        <div className="col-md-3 col-sm-3">
                            <Input 
                                type='text'
                                id='filter'
                                name='Filter'
                                className='col-md-3 col-4'
                                placeholder='Filter Customer'
                                onChange={() => {}}
                            />
                        </div>
                        <div className="col-md-2 col-sm-3">
                            <Button color="primary" icon="Search">
                                Search
                            </Button>
                        </div>
                        <div className="col-md-2 col-sm-3 ms-auto">
                            <Button color='success' icon="Add" onClick={() => setOpenModal(true)}>Tambah Pelanggan</Button>
                        </div>
                    </div>
                    <DarkDataTable
                        className='table-custom p-2'
                        columns={columns}
						data={dummyCustomer}
						pagination={false}
                        theme={darkModeStatus ? 'custom_dark' : 'light'}
                    />
                </CardBody>
            </Card>
            <FormModal
                id='addmodal'
                openModal={openModal}
                setOpenModal={setOpenModal}
                type='add'
                initialValue={initialValue}
            />
            <FormModal
                id='editmodal'
                openModal={openModalEdit}
                setOpenModal={setOpenModalEdit}
                type='edit'
                initialValue={dataTemp}
            />
        </PageWrapper>
    )
}

export default Example;